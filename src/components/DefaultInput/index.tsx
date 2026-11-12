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
  id: string; // Esse é um atributo novo
} & React.ComponentProps<'input'>; // Aqui estamos usando a interseção de tipos para combinar o tipo e pegando todos os atributos de INPUT DefaultInputProps com o tipo HTMLInputTypeAttribute do React, que já contém todos os tipos de input possíveis.

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input type={type} id={id} placeholder='Name your task' />
    </>
  );
}
