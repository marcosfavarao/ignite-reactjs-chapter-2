import logoImg from "../../common/assets/svgs/logo.svg";

import { Container, Content } from "./styles";

export const Header = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">Nova Transação</button>
            </Content>
        </Container>
    );
};
