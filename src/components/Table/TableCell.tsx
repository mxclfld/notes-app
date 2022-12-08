interface TableCellProps {
  text: string
}

export default function TableCell({ text }: TableCellProps) {
  return <td>{text}</td>
}
