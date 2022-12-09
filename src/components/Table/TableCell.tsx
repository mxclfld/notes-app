interface TableCellProps {
  value: string | JSX.Element
  className?: string
}

export default function TableCell({ value, className = '' }: TableCellProps) {
  return <td className={className}>{value}</td>
}
