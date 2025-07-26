import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function SecondVideo() {
  const videoRef = useRef(null);

  useGSAP(function () {
    gsap.set(".lucia", { marginTop: "-150vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "+=200% top",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(".jason", { opacity: 0, ease: "power1.inOut" }).to(".lucia", {
      opacity: 1,
      ease: "power1.inOut",
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
          objectPosition: "0% 0%",
        },
        "<"
      );
    };
  }, []);
  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover object-[70%_0%] second-vd"
        />
      </div>
    </section>
  );
}

export default SecondVideo;
