import { useState } from 'react';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import Header from './components/header';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
    const [topic, setTopic] = useState();

    function handleClick(selectedButton) {
        setTopic(selectedButton);
    }
    return (
        <div>
            <Header info={'Teste'} />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((c) => (
                            <CoreConcept {...c} key={c.title} />
                        ))}
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            isSelected={topic === 'components'}
                            onSelect={() => handleClick('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={topic === 'jsx'}
                            onSelect={() => handleClick('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={topic === 'props'}
                            onSelect={() => handleClick('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={topic === 'state'}
                            onSelect={() => handleClick('state')}
                        >
                            State
                        </TabButton>
                    </menu>
                    <div id='tab-content'>
                        {!topic ? (
                            <p>SELECT</p>
                        ) : (
                            <div>
                                <h3>{EXAMPLES[topic].title}</h3>
                                <p>{EXAMPLES[topic].description}</p>
                                <pre>
                                    <code>{EXAMPLES[topic].code}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
