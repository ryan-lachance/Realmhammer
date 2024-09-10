import { Button } from "@mui/material";
import { ArmyContext } from "../Contexts/ArmyContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const { setArmy } = useContext(ArmyContext);
    const navigate = useNavigate();

    const handleButtonClick = (key: string) => {
        setArmy(key);
        navigate(`/abilities`); // Change '/new-page' to your desired route
    };

    return (
        <div>
            <h1>Local Storage Keys</h1>
            <ul>
                {Object.keys(localStorage).map((key) => (
                    <Button key={key} onClick={() => handleButtonClick(key)}>
                        {key}
                    </Button>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
