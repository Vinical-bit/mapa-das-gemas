// Shader das pedras: facetas por derivadas, brilho de borda (fresnel) e
// "fogo" colorido por dentro com ruído simplex. Veio do passeio-mari e
// ganhou uma passada nas faces de trás para dar profundidade.

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
`;

export const VERT = /* glsl */ `
varying vec3 vObj; varying vec3 vPos;
void main(){ vObj = position; vec4 mv = modelViewMatrix * vec4(position,1.0); vPos = mv.xyz; gl_Position = projectionMatrix * mv; }
`;

export const FRAG = /* glsl */ `
uniform vec3 c1; uniform vec3 c2; uniform vec3 c3; uniform vec3 glow;
uniform float fire; uniform float time; uniform float seed; uniform float back;
varying vec3 vObj; varying vec3 vPos;
${NOISE}
vec3 hsv2rgb(vec3 c){vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}
void main(){
  vec3 N = normalize(cross(dFdx(vPos), dFdy(vPos)));
  vec3 V = normalize(-vPos);
  if (dot(N,V) < 0.0) N = -N;
  float ndv = clamp(dot(N,V), 0.0, 1.0);
  float fres = pow(1.0 - ndv, 2.4);
  vec3 p = vObj * 1.4 + seed;
  float n1 = snoise(p + vec3(0.0, time*0.04, 0.0));
  float n2 = snoise(p*2.2 - vec3(time*0.03));
  vec3 body = mix(c1, c2, smoothstep(-0.7, 0.55, n1));
  body = mix(body, c3, smoothstep(0.2, 0.95, n2) * 0.75);
  float cracks = snoise(p*2.6 + N*0.9);
  float fleck = smoothstep(0.2, 0.75, cracks) * (0.6 + 0.4*snoise(p*1.5 + N*2.0 + time*0.05));
  // o tom do "fogo" muda com a normal: girar a pedra faz as cores andarem
  float hue = fract(cracks*0.55 + n2*0.35 + dot(N, vec3(0.31,0.52,0.21)) + seed*0.13);
  vec3 spectral = hsv2rgb(vec3(hue, 0.7, 1.0));

  if (back > 0.5) {
    // faces de trás: o "miolo" da pedra, mais escuro e com mais fogo
    vec3 col = body * 0.55 + spectral * max(fleck, 0.0) * fire * 1.1 + c3 * 0.12;
    gl_FragColor = vec4(col, 1.0);
    return;
  }

  vec3 col = body * (0.62 + 0.38*(1.0 - ndv*0.6));
  col += spectral * max(fleck, 0.0) * fire * 0.9;
  float vein = 1.0 - smoothstep(0.0, 0.06, abs(snoise(p*3.1 + 7.0)));
  col += vec3(1.0) * vein * 0.08;
  vec3 L1 = normalize(vec3(0.45, 0.8, 0.6)); vec3 L2 = normalize(vec3(-0.75, -0.15, 0.55));
  col *= 0.7 + 0.45*max(dot(N, L1), 0.0);
  vec3 R = reflect(-V, N);
  float spec = pow(max(dot(R, L1), 0.0), 60.0) * 1.3 + pow(max(dot(R, L2), 0.0), 28.0) * 0.45;
  col += vec3(spec);
  // brilho forte na borda, puxado para a cor de brilho da gema
  col += fres * mix(glow, vec3(1.0), 0.4) * 1.25;
  // a frente fica um pouco transparente no centro para mostrar o miolo
  float alpha = mix(0.8, 1.0, fres) ;
  gl_FragColor = vec4(col, alpha);
}
`;
