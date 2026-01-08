import Image from "next/image";
import Wrapper from "./components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <span className="text-8xl ml-3 font-bold text-2xl">
            Mone<span className="text-accent">Tix</span>
          </span>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}
