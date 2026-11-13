import styles from './styles.module.css';

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
  ...props // Este é o operador props, que é o restante de todas as propriedades que não foram desestruturadas e serão passadas para o input.
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} {...props} />
    </>
  );
}
