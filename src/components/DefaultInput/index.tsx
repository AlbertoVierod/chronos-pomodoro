// Dá para colocar o type como opcional, caso não seja passado, o input será do tipo text e a lista de tipos de input é baseada na documentação do MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
// type DefaultInputProps = {
//   type?:
//     | 'text'
//     | 'number'
//     | 'password'
//     | 'email'
//     | 'tel'
//     | 'url'
//     | 'search'
//     | 'date'
//     | 'time'
//     | 'datetime-local'
//     | 'month'
//     | 'week'
//     | 'color';
// };
// ou
type DefaultInputProps = {
  id?: string; // Esse é um atributo novo
  labelText?: string; // Esse é um atributo novo
} & React.ComponentProps<'input'>; // Aqui estamos usando a interseção de tipos para combinar o tipo e pegando todos os atributos de INPUT DefaultInputProps com o tipo HTMLInputTypeAttribute do React, que já contém todos os tipos de input possíveis.

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest // Este é o operador rest, que pega todos os atributos que não foram desestruturados e coloca dentro de um objeto chamado rest, que será passado para o input.
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input type={type} id={id} {...rest} />
    </>
  );
}
