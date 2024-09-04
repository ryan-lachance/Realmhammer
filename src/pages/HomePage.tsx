import { Button } from "@mui/material";
import { ArmyContext } from "../Contexts/ArmyContext";
import { useContext } from "react";

function HomePage() {

    const { setArmy } = useContext(ArmyContext)

    return (

        <div>
            <h1>Local Storage Keys</h1>
            <ul>
                {Object.keys(localStorage).map((key) => (
                    <Button>{key}</Button>
                ))}
            </ul>
        </div>
    );
};

export default HomePage