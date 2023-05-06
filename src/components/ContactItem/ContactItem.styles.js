import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;

export const DeleteBtn = styled.button`
  border: none;
  border-radius: 5px;

  padding: 3px 10px;

  background-color: ${({ theme }) => theme.colors.buttonBg};

  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
