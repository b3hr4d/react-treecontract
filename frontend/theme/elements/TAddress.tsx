import { Check, ContentCopy } from '@mui/icons-material'
import { Link, Typography } from '@mui/material'
import copy from 'copy-to-clipboard'
import { getEllipsis } from 'helpers'

import { useState } from 'react'

interface CopyableAddressProps {
  copyable?: boolean
  length?: number
  address: string
  onClick?: () => void
}

const TAddress: React.FC<CopyableAddressProps> = ({
  address,
  length,
  copyable = true,
  onClick,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState(false)

  const copyHandler = () => {
    copy(address)
    setIsClicked(true)
  }

  return (
    <Typography style={{ display: 'flex' }} {...rest}>
      <Link variant="button" sx={{ cursor: 'pointer' }} onClick={onClick}>
        {getEllipsis(address)}
      </Link>
      {copyable &&
        (isClicked ? (
          <Check
            onClick={() => setIsClicked(false)}
            sx={{
              cursor: 'pointer',
              pl: '0.1rem',
              width: '1rem',
              color: 'green',
            }}
          />
        ) : (
          <ContentCopy
            sx={{ cursor: 'pointer', pl: '0.1rem', width: '1rem' }}
            onClick={copyHandler}
          />
        ))}
    </Typography>
  )
}

export default TAddress
