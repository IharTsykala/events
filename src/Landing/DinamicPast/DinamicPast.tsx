import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
// import { getListEvents } from "../../Redux/store/events/events.actions"
import { setCurrentSport } from "../../Redux/store/currentSpotr/currentSpotr.actions"
import { setPeriod } from "../../Redux/store/period/period.actions"
import { getListEvents } from "../../Redux/store/events/events.thunk"
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
  // dispatch: any,
  listEvents: [],
  listSports: [],
  currentSport: number,
  period: boolean,
  getListEvents: any,
  setPeriod: any,
  setCurrentSport: any,
}

const DinamicPast: React.FunctionComponent<DinamicPastProps> = ({
  // dispatch,
  listEvents,
  listSports,
  currentSport,
  period,
  getListEvents,
  setPeriod,
  setCurrentSport,
}) => {
  const classes = useStyles()
  // const inputEl = useRef(null)

  useEffect(() => {
    // console.log(currentSport)
    getListEvents(currentSport, +period)
  }, [currentSport, getListEvents, period])

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
          onChange={(e: any) => setCurrentSport(e.target.value)}
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
          onChange={() => setPeriod()}
          checked={period}
          color="primary"
        />
      </Box>

      <List className={"response-list"}>
        {listEvents.length !== 0 &&
          listEvents.map((item: any, index: number) => (
            <ListItem key={item.id} button className={"response-list__item"}>
              <ListItemText
                className={
                  "response-list__item-text response-list__item-text_first"
                }
                primary={item.id}
              />
              <ListItemText
                className={
                  "response-list__item-text response-list__item-text_second"
                }
                primary={`${item.sportName} ${item.leagueName}`}
              />
              <ListItemText
                className={
                  "response-list__item-text response-list__item-text_third"
                }
                primary={`${item.team1} - ${item.team2}`}
              />
              <ListItemText
                className={
                  "response-list__item-text response-list__item-text_fourth"
                }
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

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     getListEvents: (currentSport: number, period: any) =>
//       dispatch(getListEvents(currentSport, period)),
//     dispatch,
//   }
// }

export default connect(mapStateToProps, {
  getListEvents,
  setCurrentSport,
  setPeriod,
})(DinamicPast)
