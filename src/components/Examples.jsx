import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    const [topic, setTopic] = useState();

    function handleClick(selectedButton) {
        setTopic(selectedButton);
    }

    const tabContent = !topic ? (
        <p>SELECT</p>
    ) : (
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
    );

    return (
        <Section title='Examples' id='examples'>
            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={topic === 'components'}
                            onClick={() => handleClick('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={topic === 'jsx'}
                            onClick={() => handleClick('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={topic === 'props'}
                            onClick={() => handleClick('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={topic === 'state'}
                            onClick={() => handleClick('state')}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
