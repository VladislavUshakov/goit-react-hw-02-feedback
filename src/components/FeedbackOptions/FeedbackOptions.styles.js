import styled from '@emotion/styled';

const setBgColor = p => {
  const isPositive = p['data-status'];

  return isPositive ? '#00c900' : '#ff9800';
};

export const OptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;

  margin-bottom: 25px;
`;

export const Button = styled.button`
  width: 80px;
  height: 28px;
  margin: 0;
  border: none;
  border-radius: 5px;
  /* #ff9800 */
  background-color: ${setBgColor};
  color: white;

  transition: transform 200ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
