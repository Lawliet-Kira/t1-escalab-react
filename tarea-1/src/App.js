import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider theme={theme} resetCss>
            <div className="App">

            </div>
        </ChakraProvider>
    );
}

export default App;
