// import { Container } from 'react-bootstrap';

// export default function Jumbotron({ fluid, className, children }) {
//     return (
//         <Container fluid={fluid} className={className}>
//             {children}
//         </Container>
//     )
// }

import { Jumbotron } from 'react-bootstrap';

export default function MyJumbotron({ fluid, className, children }) {
    return (
        <Jumbotron fluid={fluid} className={className}>
            {children}
        </Jumbotron>
    )
}