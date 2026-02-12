import styled from "styled-components";

const InputWrapper = styled.div`
  color: (${(props) => props.$color || "black"});
`;

export const InputCustom = ({
  color,
  label,
  nickname,
  type,
  placeholder,
  ...props
}) => {
  return (
    <InputWrapper $color={color}>
      {label && <p>{label}</p>}
      <input type={type} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};
