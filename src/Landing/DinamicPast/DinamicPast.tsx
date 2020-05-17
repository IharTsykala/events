import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getListEvents } from "../../Redux/store/events/events.actions"
import { setCurrentSport } from "../../Redux/store/currentSpotr/currentSpotr.actions"
import { setPeriod } from "../../Redux/store/period/period.actions"
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Select,
  FormControl,
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
      fill: "white",
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
    <div className={"dinamic-past"}>
      <Select
        className={`${classes.select}`}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
        onChange={(e: any) => dispatch(setCurrentSport(e.target.value))}
        value={currentSport || "Все виды спорта"}
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
        onChange={() => {
          dispatch(setPeriod())
        }}
        checked={period}
        color="primary"
      />

      {listEvents.length !== 0 &&
        listEvents.map((item: any, index: number) => (
          <ListItem key={item.id} button>
            <ListItemText
              // className={}
              primary={item.id}
            />
            <ListItemText
              // className={}
              primary={`${item.sportName} ${item.leagueName}`}
            />
            <ListItemText
              // className={}
              primary={`${item.team1} - ${item.team2}`}
            />
            <ListItemText
              // className={}
              primary={`${item.date}`}
            />
          </ListItem>
        ))}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  listEvents: state.listEvents.listEvents,
  listSports: state.listEvents.listSports,
  currentSport: state.currentSport.currentSport,
  period: state.period.period,
})

export default connect(mapStateToProps)(DinamicPast)
