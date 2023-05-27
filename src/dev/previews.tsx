import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import CollaborationDetailsPage from "../pages/marketplace/CollaborationDetailsPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CollaborationDetailsPage">
                <CollaborationDetailsPage/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;