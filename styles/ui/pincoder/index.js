import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Space from '../space';
import digitMap from './config/digits';
import { Container, Legend, Text, BlockList, BlockItem, BlockInput } from "./styles";

const Pincoder = ({ legend, text, type }) => {
    const currentRef = useRef();
    const [blockIndex, setBlockIndex] = useState(0);
    const [activeBlockId, setActiveBlockId] = useState(digitMap[type].blocks[0].id);
    const [blocks, setBlocks] = useState(digitMap[type].blocks);

    const next = () => {
        if (blockIndex >= blocks.length)
            return;
        setBlockIndex(prevState => prevState + 1);
        setActiveBlockId(digitMap[type].blocks[blockIndex].id);
        console.log(blocks);
    }

    const prev = () => {
        if (blockIndex === 0)
            return;
        setBlockIndex(prevState => prevState - 1);
        setActiveBlockId(digitMap[type].blocks[blockIndex].id);
        console.log(blocks);
    }

    const pressHandler = (e) => {
        if (e.key === 'Backspace') {
            const value = e.target.value;
            setBlocks(prevState => {
                const newBlocks = prevState;
                newBlocks[blockIndex].value = '';
                return newBlocks;
            });
            prev();
        } else {
            const value = e.target.value;
            if (isNaN(value))
                return;
            setBlocks(prevState => {
                const newBlocks = prevState;
                newBlocks[blockIndex].value = value;
                return newBlocks;
            });
            next();
        }
    }

    return (
        <Container>
            <Legend>{legend}</Legend>
            <Text>{text}</Text>
            <Space vertical={20} />
            <BlockList>
                {
                    blocks.map(block => (
                        <BlockItem key={block.id}>
                            <BlockInput
                                value={block.value}
                                onChange={pressHandler}
                                active={activeBlockId === block.id}
                                autoFocus={activeBlockId === block.id}
                                autoComplete={'C'}
                            />
                        </BlockItem>
                    ))
                }
            </BlockList>
        </Container>
    );
}

Pincoder.propTypes = {
    legend: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(['email', 'mobile']),
};

export default Pincoder;