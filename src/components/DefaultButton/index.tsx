import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode; // Esse é um atributo novo, que vai receber um ícone do tipo React.ReactNode, que é o tipo de qualquer elemento React, como um componente, uma string, um número, etc.
  color?: 'green' | 'red'; // Esse é um atributo novo, que vai receber uma cor do tipo string, que pode ser 'green', 'red' ou 'blue'.
} & React.ComponentProps<'button'>; // Aqui estamos usando a interseção de tipos para combinar o tipo e pegando todos os atributos de BUTTON DefaultButtonProps com o tipo HTMLButtonTypeAttribute do React, que já contém todos os tipos de button possíveis.

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
