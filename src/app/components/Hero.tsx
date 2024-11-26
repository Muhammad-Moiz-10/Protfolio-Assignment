import Image from "next/image";
import main from "../../../Public/images/main.jpg"

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="img-div">
                <Image src={main} alt="moiz" height={581} width={437} className="img" />
            </div>
            <div className="text-div">
                <h1 className="its-moiz">Hi, Its <span>Moiz</span></h1>
                <h1 className="p-2">I am a <span>Developer</span></h1>
                    <p>Dedicated to building creative solutions that turn visions into engaging, <br /> user-frien
                        dly web applications, I focus on blending innovation with functionality to <br /> deliver
                         seamless digital experiences. Each project is approached with a commitment to <br /> intuitive design,
                          ensuring that every element enhances usability <br /> while reflecting the unique identity of the brand
                          . From responsive layouts and visually <br /> appealing interfaces to optimizing performance and accessibility
                          ,</p>
            </div >
        </div>




    );
}
