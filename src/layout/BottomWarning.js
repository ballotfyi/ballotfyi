import React from 'react'
import styled from 'styled-components'

const BottomSticky = styled.div`
  position: fixed;
  font-size: 14px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  z-index: 999;
  padding: 10px 30px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  text-align: center;
`;

const BottomWarning = () => {
  return(
    <BottomSticky>
      <span>You're viewing the 2018 guide. Here's how to <a href="https://www.ballot.fyi/">return to 2020</a>, when you're ready.</span>
    </BottomSticky>
  )
}

export default BottomWarning;
