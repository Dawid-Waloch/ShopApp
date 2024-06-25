import { PageNotFoundWrapper, Image, LinkStyle } from "./NotFoundStyled"

const NotFound = () => {
    return (
            <PageNotFoundWrapper>
                <Image src="/sad_emoji.png" alt="sad emoji" />
                <h2>Page not found</h2>
                <h3>Sorry, but this page, doesn't exist</h3>
                <LinkStyle to="/">Go to Home Page</LinkStyle>
            </PageNotFoundWrapper>
    )
}

export default NotFound