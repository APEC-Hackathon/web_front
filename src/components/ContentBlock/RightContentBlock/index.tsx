import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
    RightBlockContainer,
    Content,
    ContentWrapper,
    ButtonWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

const RightBlock = ({
    title,
    content,
    button,
    icon,
    t,
    id,
}: ContentBlockProps) => {
    const navigate = useNavigate();

    const handleButtonClick = (route: string) => {
        if (route === "/login") {
            navigate("/login");
        } else {
            const element = document.getElementById(route) as HTMLDivElement;
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <RightBlockContainer>
            <Fade direction="right">
                <Row justify="space-between" align="middle" id={id}>
                    <Col lg={11} md={11} sm={11} xs={24}>
                        <ContentWrapper>
                            <h2>{t(title)}</h2>
                            <Content>{t(content)}</Content>
                            <ButtonWrapper>
                                {typeof button === "object" &&
                                    button.map((item: any, id: number) => (
                                        <Button
                                            key={id}
                                            color={item.color}
                                            fixedWidth={true}
                                            onClick={() =>
                                                handleButtonClick(item.route)
                                            }
                                        >
                                            {t(item.title)}
                                        </Button>
                                    ))}
                            </ButtonWrapper>
                        </ContentWrapper>
                    </Col>
                    <Col lg={11} md={11} sm={12} xs={24}>
                        <SvgIcon src={icon} width="100%" height="100%" />
                    </Col>
                </Row>
            </Fade>
        </RightBlockContainer>
    );
};

export default withTranslation()(RightBlock);
