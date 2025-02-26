
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}