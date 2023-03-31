import { useState } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #f7f7f7;
    color: #242424;
    padding: 0.15rem 0.5rem;
    min-height: 20px;
    font-size:14px;
    border-radius: 4px;
    outline: none;
    border: none;
    line-height: 1.15;
    box-shadow: 0px 5px 20px -18px;

    &:focus {
        border-bottom: 2px solid #5b5fc7;
        border-radius: 4px 4px 2px 2px;
    }

    &:hover {
        outline: 1px solid lightgrey;
    }
`

export const PrinceInput = styled.div`
    width: 100%;
    display: flex;
    margin: 30px 0 35px;
`

export const Field = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
`

export const InputNumber = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 19px;
    margin-left: 12px;
    border-radius: 5px;
    text-align: center;
    border: 1px solid #999;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

export const Separator = styled.div`
    width: 130px;
    display: flex;
    font-size: 19px;
    align-items: center;
    justify-content: center;
`
export function Range() {
    const [max, setMax ] = useState(0);
    const [min, setMin ] = useState(0);
    
    console.log(max, min);


    return (
            <Wrapper>
                <PrinceInput>
                    <Field>
                        <span>Min</span>
                        <InputNumber
                            type='number'
                            value={min}
                            onChange={(e:any) => setMin(e.target.value)}
                        />
                    </Field>
                    <Separator />
                    <Field>
                        <span>Max</span>
                        <InputNumber
                            type='number'
                            value={max}
                            onChange={(e:any) => setMax(e.target.value)}
                        />
                    </Field>
                </PrinceInput>
            </Wrapper>
    )
}

