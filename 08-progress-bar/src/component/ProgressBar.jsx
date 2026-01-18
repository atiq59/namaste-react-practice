import {useState} from "react";

function ProgressBar() {
    const [width, setWidth] = useState(0);

    const getWidthColor = () => {
        if (width >=80) return "green";
        if (width >= 40) return "orange";
        return "red";
    }

    const onBtnClick = (value) => {
        setWidth(prev => Math.max(0, Math.min(100, prev + value)))
    }
    return (
        <div style={{maxWidth: "400px", margin: "auto", padding: "20px"}}>
            {/* Implement the ProgressBar component logic here */}
            <h2>Progess Bar</h2>
            <div style={{backgroundColor: "#ddd", height: "25px", overflow: "hidden", position: "relative"}}>
                <div
                    style={{
                        width: `${width}%`,
                        backgroundColor: getWidthColor(),
                        height: "100%"
                    }}
                    id="testBgColor"
                >
                    <span style={{color: "#fff"}}>{width}%</span>
                </div>
            </div>
            <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                <button onClick={() => onBtnClick(-10)}>-10%</button>
                <button onClick={() => onBtnClick(+10)}>+10%</button>
            </div>
        </div>

    );
}

export default ProgressBar;
