import React from "react"
import PropTypes from "prop-types"

import { Box, Grid } from "theme-ui"
import MartyrCard from "../../components/MartyrCard"
import useMartyrsQuery from "../../hooks/useMartyrsQuery"

function Martyrs({ sx, heading, ...props }) {
  const martyrs = useMartyrsQuery()
  return (
    <Box
      as="section"
      sx={{ backgroundColor: "light", pt: heading ? 25 : 100, pb: 100, ...sx }}
    >
      {heading}
      <Grid
        sx={{
          maxWidth: 1200,
          px: 3,
          pt: heading && 25,
          mx: "auto",
          justifyContent: "center",
        }}
        gap={2}
        columns={[2, null, 4, 5]}
      >
        {martyrs.map(
          ({
            node: {
              id,
              fields,
              frontmatter: { name, role, avatar },
            },
          }) => (
            <MartyrCard
              key={id}
              path={fields.slug}
              name={name}
              role={role}
              avatar={avatar}
            />
          )
        )}
      </Grid>
    </Box>
  )
}

Martyrs.propTypes = {
  sx: PropTypes.shape({}),
}

export default Martyrs
