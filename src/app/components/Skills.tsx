import Image from "next/image";
import tslogo from "../../../Public/images/tslogo.png"
import csslogo from "../../../Public/images/csslogo.png"
import htmllogo from "../../../Public/images/htmllogo.png"
import Nextlogo from "../../../Public/images/nextlogo.png"
export default function Skils() {
    return (
        <div className="skills-section">
            <div className="skills-heading">
                <p>My <span>Skills</span></p>
            </div>
            <div className="skills-card">
                <div className="card-1">
                    <div className="text"><span>Typescript</span>
                    <div className="photo-div">
                        <div className="image"><Image className="img" src={tslogo} alt="hammad" height={74} width={100} ></Image></div>
                    </div>
                    </div>
                    <div className="percentage">
                        <p>90%</p>
                    </div>
                    
                    
                </div>
                <div className="card-2">
                <div className="text"><span>Html</span>
                    <div className="photo-div">
                        <div className="image"><Image className="img" src={htmllogo} alt="hammad" height={74} width={100} ></Image></div>
                    </div>
                    </div>
                    <div className="percentage">
                        <p>100%</p>
                    </div>
                </div>
                <div className="card-3">
                <div className="text"><span>Next.Js</span>
                    <div className="photo-div">
                        <div className="image"><Image className="img" src={Nextlogo} alt="hammad" height={74} width={100} ></Image></div>
                    </div>
                    </div>
                    <div className="percentage">
                        <p>85%</p>
                    </div>
                </div>
                <div className="card-4">
                <div className="text"><span>CSS</span>
                    <div className="photo-div">
                        <div className="image"><Image className="img" src={csslogo} alt="hammad" height={74} width={100} ></Image></div>
                    </div>
                    </div>
                    <div className="percentage">
                        <p>100%</p>
                    </div>
                </div>
            </div>
        </div>



    );
}