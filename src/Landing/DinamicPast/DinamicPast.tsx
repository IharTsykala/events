import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
import { getListEvents } from "../../Redux/store/events/events.actions"
import { setCurrentSport } from "../../Redux/store/currentSpotr/currentSpotr.actions"
import { setPeriod } from "../../Redux/store/period/period.actions"
import {
  ListItem,
  ListItemAvatar,
  List,
  ListItemText,
  Select,
  Box,
  MenuItem,
  Checkbox,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      "&:before": {
        borderColor: "black",
      },
      "& div": {
        color: "black",
      },
      "&:after": {
        borderColor: "black",
      },
    },
    icon: {
      fill: "black",
    },
  })
)

type DinamicPastProps = {
  dispatch: any,
  listEvents: [],
  listSports: [],
  currentSport: number,
  period: boolean,
}

const DinamicPast: React.FunctionComponent<DinamicPastProps> = ({
  dispatch,
  listEvents,
  listSports,
  currentSport,
  period,
}) => {
  const classes = useStyles()
  // const inputEl = useRef(null)

  useEffect(() => {
    console.log(currentSport)
    dispatch(getListEvents(currentSport, +period))
  }, [currentSport, dispatch, period])

  useEffect(() => {
    // console.log(listEvents)
    // console.log(listSports)
    // console.log(period)
  }, [listEvents, listSports, period])

  return (
    <Box component={"div"} className={"dinamic-container"}>
      <Box component={"div"} className={"request-block"}>
        <Select
          className={`request-block__select ${classes.select}`}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          onChange={(e: any) => dispatch(setCurrentSport(e.target.value))}
          value={currentSport}
        >
          {listSports &&
            listSports.length !== 0 &&
            listSports.map((item: any) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
        </Select>

        <Checkbox
          className={"request-block__check-box"}
          onChange={() => {
            dispatch(setPeriod())
          }}
          checked={period}
          color="primary"
        />
      </Box>

      <List className={"response-list"}>
        {listEvents.length !== 0 &&
          listEvents.map((item: any, index: number) => (
            <ListItem key={item.id} button className={"response-list__item"}>
              <ListItemText
                className={"response-list__item-text"}
                primary={item.id}
              />
              <ListItemText
                className={"response-list__item-text"}
                primary={`${item.sportName} ${item.leagueName}`}
              />
              <ListItemText
                className={"response-list__item-text"}
                primary={`${item.team1} - ${item.team2}`}
              />
              <ListItemText
                className={"response-list__item-text"}
                primary={`${item.date}`}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  listEvents: state.listEvents.listEvents,
  listSports: state.listEvents.listSports,
  currentSport: state.currentSport.currentSport,
  period: state.period.period,
})

export default connect(mapStateToProps)(DinamicPast)
