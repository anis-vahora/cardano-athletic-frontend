import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import useInput from '../../hooks/input/use-input';
import { validateNumberRange } from '../../shared/utils/numberRange';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    background: {
      default: '#191F2D',
      paper: '#191F2D',
    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

interface Player {
  position: string;
  pace: string;
  shooting: string;
  passing: string;  
  defending: string;
  physical: string;
  sprintSpeed: string;
  acceleration: string;
  finishing: string;
  attPosition: string;
  shotPower:string;
  longShots:string;
  penalties:string;
  volleys:string;
  vision: string;
  crossing: string,
  fkAcc: string,
  longPass: string,
  shortPass:string,
  curve: string,
  agility: string,
  balance: string,
  reactions: string,
  composure: string,
  ballControl: string,
  dribbling: string,
  interceptions: string,
  headingAcc: string,
  defAware : string,
  standTackle: string,
  slideTackle : string,
  jumping: string,
  stamina: string,
  strength: string,
  aggression: string
}

const PlayerStatsForm: FC = () => {
  const [player, setPlayer] = useState<Player>({
    position: '',
    pace: '',
    shooting: '',
    passing: '',
    defending: '',
    physical: '',
    sprintSpeed: '',
    acceleration: '',
    finishing:'',   
    attPosition: '',
    shotPower:'',
    longShots:'',
    penalties:'',
    volleys:'',
    vision:'',
    crossing: '',
    fkAcc: '',
    longPass: '',
    shortPass:'',
    curve: '',
    agility: '',
    balance: '',
    reactions: '',
    composure: '',
    ballControl: '',
    dribbling: '',
    interceptions: '',
    headingAcc: '',
    defAware : '',
    standTackle: '',
    slideTackle : '',
    jumping: '',
    stamina: '',
    strength: '',
    aggression: ''

  });

  const navigate = useNavigate();

  const {
    text: position,
    shouldDisplayError: positionHasError,
    textChangeHandler: positionChangeHandler,
    inputBlurHandler: positionBlurHandler,
    clearHandler: positionClearHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    text: pace,
    shouldDisplayError: paceHasError,
    textChangeHandler: paceChangeHandler,
    inputBlurHandler: paceBlurHandler,
    clearHandler: paceClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: shooting,
    shouldDisplayError: shootingHasError,
    textChangeHandler: shootingChangeHandler,
    inputBlurHandler: shootingBlurHandler,
    clearHandler: shootingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: passing,
    shouldDisplayError: passingHasError,
    textChangeHandler: passingChangeHandler,
    inputBlurHandler: passingBlurHandler,
    clearHandler: passingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: dribbling,
    shouldDisplayError: dribblingHasError,
    textChangeHandler: dribblingChangeHandler,
    inputBlurHandler: dribblingBlurHandler,
    clearHandler: dribblingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: defending,
    shouldDisplayError: defendingHasError,
    textChangeHandler: defendingChangeHandler,
    inputBlurHandler: defendingBlurHandler,
    clearHandler: defendingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: physical,
    shouldDisplayError: physicalHasError,
    textChangeHandler: physicalChangeHandler,
    inputBlurHandler: physicalBlurHandler,
    clearHandler: physicalClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: sprintSpeed,
 
    textChangeHandler: sprintSpeedChangeHandler,
    inputBlurHandler: sprintSpeedBlurHandler,
    clearHandler: sprintSpeedClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: acceleration,
    textChangeHandler: accelerationChangeHandler,
    inputBlurHandler: accelerationBlurHandler,
    clearHandler: accelerationClearHandler,
  } = useInput(validateNumberRange(0, 100));


  const {
    text: finishing,
    shouldDisplayError: finishingHasError,
    textChangeHandler: finishingChangeHandler,
    inputBlurHandler: finishingBlurHandler,
    clearHandler: finishingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: attPosition,
    shouldDisplayError: attPositionHasError,
    textChangeHandler: attPositionChangeHandler,
    inputBlurHandler: attPositionBlurHandler,
    clearHandler: attPositionClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: shotPower,
    shouldDisplayError: shotPowerHasError,
    textChangeHandler: shotPowerChangeHandler,
    inputBlurHandler: shotPowerBlurHandler,
    clearHandler: shotPowerClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: longShots,
    shouldDisplayError: longShotsHasError,
    textChangeHandler: longShotsChangeHandler,
    inputBlurHandler: longShotsBlurHandler,
    clearHandler: longShotsClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: penalties,
    shouldDisplayError: penaltiesHasError,
    textChangeHandler: penaltiesChangeHandler,
    inputBlurHandler: penaltiesBlurHandler,
    clearHandler: penaltiesClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: volleys,
    shouldDisplayError: volleysHasError,
    textChangeHandler: volleysChangeHandler,
    inputBlurHandler: volleysBlurHandler,
    clearHandler: volleysClearHandler,
  } = useInput(validateNumberRange(0, 100));

  
  const {
    text: vision,
    shouldDisplayError: visionHasError,
    textChangeHandler: visionChangeHandler,
    inputBlurHandler: visionBlurHandler,
    clearHandler: visionClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: crossing,
    shouldDisplayError: crossingHasError,
    textChangeHandler: crossingChangeHandler,
    inputBlurHandler: crossingBlurHandler,
    clearHandler: crossingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: fkAcc,
    shouldDisplayError: fkAccHasError,
    textChangeHandler: fkAccChangeHandler,
    inputBlurHandler: fkAccBlurHandler,
    clearHandler: fkAccClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: longPass,
    shouldDisplayError: longPassHasError,
    textChangeHandler: longPassChangeHandler,
    inputBlurHandler: longPassBlurHandler,
    clearHandler: longPassClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: shortPass,
    shouldDisplayError: shortPassHasError,
    textChangeHandler: shortPassChangeHandler,
    inputBlurHandler: shortPassBlurHandler,
    clearHandler: shortPassClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: curve,
    shouldDisplayError: curveHasError,
    textChangeHandler: curveChangeHandler,
    inputBlurHandler: curveBlurHandler,
    clearHandler: curveClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: agility,
    shouldDisplayError: agilityHasError,
    textChangeHandler: agilityChangeHandler,
    inputBlurHandler: agilityBlurHandler,
    clearHandler: agilityClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: balance,
    shouldDisplayError: balanceHasError,
    textChangeHandler: balanceChangeHandler,
    inputBlurHandler: balanceBlurHandler,
    clearHandler: balanceClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: reactions,
    shouldDisplayError: reactionsHasError,
    textChangeHandler: reactionsChangeHandler,
    inputBlurHandler: reactionsBlurHandler,
    clearHandler: reactionsClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: composure,
    shouldDisplayError: composureHasError,
    textChangeHandler: composureChangeHandler,
    inputBlurHandler: composureBlurHandler,
    clearHandler: composureClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: ballControl,
    shouldDisplayError: ballControlHasError,
    textChangeHandler: ballControlChangeHandler,
    inputBlurHandler: ballControlBlurHandler,
    clearHandler: ballControlClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: interceptions,
    shouldDisplayError: interceptionsHasError,
    textChangeHandler: interceptionsChangeHandler,
    inputBlurHandler: interceptionsBlurHandler,
    clearHandler: interceptionsClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: headingAcc,
    shouldDisplayError: headingAccHasError,
    textChangeHandler: headingAccChangeHandler,
    inputBlurHandler: headingAccBlurHandler,
    clearHandler: headingAccClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: defAware,
    shouldDisplayError: defAwareHasError,
    textChangeHandler: defAwareChangeHandler,
    inputBlurHandler: defAwareBlurHandler,
    clearHandler: defAwareClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: standTackle,
    shouldDisplayError: standTackleHasError,
    textChangeHandler: standTackleChangeHandler,
    inputBlurHandler: standTackleBlurHandler,
    clearHandler: standTackleClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: slideTackle,
    shouldDisplayError: slideTackleHasError,
    textChangeHandler: slideTackleChangeHandler,
    inputBlurHandler: slideTackleBlurHandler,
    clearHandler: slideTackleClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: jumping,
    shouldDisplayError: jumpingHasError,
    textChangeHandler: jumpingChangeHandler,
    inputBlurHandler: jumpingBlurHandler,
    clearHandler: jumpingClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: stamina,
    shouldDisplayError: staminaHasError,
    textChangeHandler: staminaChangeHandler,
    inputBlurHandler: staminaBlurHandler,
    clearHandler: staminaClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: strength,
    shouldDisplayError: strengthHasError,
    textChangeHandler: strengthChangeHandler,
    inputBlurHandler: strengthBlurHandler,
    clearHandler: strengthClearHandler,
  } = useInput(validateNumberRange(0, 100));

  const {
    text: aggression,
    shouldDisplayError: aggressionHasError,
    textChangeHandler: aggressionChangeHandler,
    inputBlurHandler: aggressionBlurHandler,
    clearHandler: aggressionClearHandler,
  } = useInput(validateNumberRange(0, 100));

  

  const clearForm = () => {
    positionClearHandler();
    paceClearHandler();
    shootingClearHandler();
    passingClearHandler();
    dribblingClearHandler();
    defendingClearHandler();
    physicalClearHandler();
    // sprintSpeedClearHandler();
    // accelerationClearHandler();
    finishingClearHandler();
    attPositionClearHandler();
    shotPowerClearHandler();
    longShotsClearHandler();
    volleysClearHandler();
    visionClearHandler();
    crossingClearHandler();
    fkAccClearHandler();
    longPassClearHandler();
    shortPassClearHandler();
    curveClearHandler();
    agilityClearHandler();
    balanceClearHandler();
    reactionsClearHandler();
    composureClearHandler();
    ballControlClearHandler();
    interceptionsClearHandler();
    headingAccClearHandler();
    defAwareClearHandler();
    standTackleClearHandler();
    slideTackleClearHandler();
    jumpingClearHandler();
    staminaClearHandler();
    strengthClearHandler();
    aggressionClearHandler();

  };

  const newPlayer: Player = {
    position,
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    sprintSpeed,
    acceleration,
    finishing,   
    attPosition,
    shotPower,
    longShots,
    penalties,
    volleys,
    vision,
    crossing,
    fkAcc,
    longPass,
    shortPass,
    curve,
    agility,
    balance,
    reactions,
    composure,
    ballControl,
    interceptions,
    headingAcc,
    defAware,
    standTackle,
    slideTackle,
    jumping,
    stamina,
    strength,
    aggression
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    if (
      positionHasError ||
      paceHasError ||
      shootingHasError ||
      passingHasError ||
      dribblingHasError ||
      defendingHasError ||
      physicalHasError ||
      // sprintSpeedHasError ||
      // accelerationHasError ||
      finishingHasError ||
      attPositionHasError ||
      longShotsHasError ||
      shotPowerHasError ||
      penaltiesHasError ||
      volleysHasError ||
      visionHasError ||
      fkAccHasError ||
      longPassHasError ||
      shortPassHasError ||
      curveHasError ||
      agilityHasError ||
      balanceHasError ||
      reactionsHasError ||
      composureHasError ||
      ballControlHasError ||
      interceptions ||
      headingAcc ||
      defAware ||
      standTackle ||
      slideTackle ||
      jumping ||
      stamina ||
      strength ||
      aggression
    )
      return;

    if (
      position.trim() === '' ||
      pace.trim() === '' ||
      shooting.trim() === '' ||
      passing.trim() === '' ||
      dribbling.trim() === '' ||
      defending.trim() === '' ||
      physical.trim() === ''  ||
      sprintSpeed.trim() === '' ||
      acceleration.trim() === '' ||
      finishing.trim() === '' ||
      attPosition.trim() === ''  ||
      longShots.trim() === '' ||
      shotPower.trim() === '' ||
      penalties.trim() === '' ||
      volleys.trim() === '' ||
      vision.trim() === '' ||
      crossing.trim() === '' ||
      fkAcc.trim() === '' ||
      longPass.trim() === '' ||
      shortPass.trim() === '' ||
      curve.trim() === '' ||
      agility.trim() === '' ||
      balance.trim() === '' ||
      reactions.trim() === '' ||
      composure.trim() === '' ||
      ballControl.trim() === '' ||
      dribbling.trim() === '' ||
      interceptions.trim() === '' ||
      headingAcc.trim() === '' ||
      defAware.trim() === '' ||
      standTackle.trim() === '' ||
      slideTackle.trim() === '' ||
      jumping.trim() === '' ||
      stamina.trim() === '' ||
      strength.trim() === '' ||
      aggression 
    )

    localStorage.setItem('player', JSON.stringify(newPlayer));
    navigate('/player-stats');
    clearForm();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Box sx={{ mt: 10, mb: 0 }}>
          <Paper elevation={4} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Player Information
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={position}
                    onChange={positionChangeHandler}
                    onBlur={positionBlurHandler}
                    error={positionHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="position"
                    label="Position"
                    name="position"
                    autoComplete="position"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={pace}
                    onChange={paceChangeHandler}
                    onBlur={paceBlurHandler}
                    error={paceHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="pace"
                    label="Pace"
                    name="pace"
                    autoComplete="pace"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={shooting}
                    onChange={shootingChangeHandler}
                    onBlur={shootingBlurHandler}
                    error={shootingHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="shooting"
                    label="Shooting"
                    name="shooting"
                    autoComplete="shooting"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={passing}
                    onChange={passingChangeHandler}
                    onBlur={passingBlurHandler}
                    error={passingHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="passing"
                    label="Passing"
                    name="passing"
                    autoComplete="passing"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={dribbling}
                    onChange={dribblingChangeHandler}
                    onBlur={dribblingBlurHandler}
                    error={dribblingHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="dribbling"
                    label="Dribbling"
                    name="dribbling"
                    autoComplete="dribbling"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={defending}
                    onChange={defendingChangeHandler}
                    onBlur={defendingBlurHandler}
                    error={defendingHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="defending"
                    label="Defending"
                    name="defending"
                    autoComplete="defending"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={physical}
                    onChange={physicalChangeHandler}
                    onBlur={physicalBlurHandler}
                    error={physicalHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="physical"
                    label="Physical"
                    name="physical"
                    autoComplete="physical"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                
              </Grid>
              <Typography className ="sub-form-main" variant="h5" gutterBottom>
              Pace Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={sprintSpeed}
                    onChange={sprintSpeedChangeHandler}
                    onBlur={sprintSpeedBlurHandler}
                    // error={sprintSpeedHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="sprintSpeed"
                    label="Sprint Speed"
                    name="sprintSpeed"
                    autoComplete="sprintSpeed"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={acceleration}
                    onChange={accelerationChangeHandler}
                    onBlur={accelerationBlurHandler}
                    // error={accelerationHasError}
                    margin="normal"
                    required
                    fullWidth
                    id="acceleration"
                    label="acceleration"
                    name="acceleration"
                    autoComplete="acceleration"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>
            <Typography className ="sub-form-main" variant="h5" gutterBottom>
              Shooting Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={finishing}
                    onChange={finishingChangeHandler}
                    onBlur={finishingBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="finishing"
                    label="Finishing"
                    name="finishing"
                    autoComplete="finishing"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={attPosition}
                    onChange={attPositionChangeHandler}
                    onBlur={attPositionBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="attPosition"
                    label="Att. Position"
                    name="attPosition"
                    autoComplete="attPosition"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={shotPower}
                    onChange={shotPowerChangeHandler}
                    onBlur={shotPowerBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="shotPower"
                    label="Shot Power"
                    name="shotPower"
                    autoComplete="shotPower"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={longShots}
                    onChange={longShotsChangeHandler}
                    onBlur={longShotsBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="longShots"
                    label="Long Shots"
                    name="longShots"
                    autoComplete="longShots"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={penalties}
                    onChange={penaltiesChangeHandler}
                    onBlur={penaltiesBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="penalties"
                    label="Penalties"
                    name="penalties"
                    autoComplete="penalties"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>
              
            <Typography className ="sub-form-main" variant="h5" gutterBottom>
              Passing
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={vision}
                    onChange={visionChangeHandler}
                    onBlur={visionBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="vision"
                    label="Vision"
                    name="vision"
                    autoComplete="vision"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={attPosition}
                    onChange={attPositionChangeHandler}
                    onBlur={attPositionBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="attPosition"
                    label="Att. Position"
                    name="attPosition"
                    autoComplete="attPosition"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={shotPower}
                    onChange={shotPowerChangeHandler}
                    onBlur={shotPowerBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="shotPower"
                    label="Shot Power"
                    name="shotPower"
                    autoComplete="shotPower"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={longShots}
                    onChange={longShotsChangeHandler}
                    onBlur={longShotsBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="longShots"
                    label="Long Shots"
                    name="longShots"
                    autoComplete="longShots"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={penalties}
                    onChange={penaltiesChangeHandler}
                    onBlur={penaltiesBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="penalties"
                    label="Penalties"
                    name="penalties"
                    autoComplete="penalties"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={volleys}
                    onChange={volleysChangeHandler}
                    onBlur={volleysBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="volleys"
                    label="Volleys"
                    name="volleys"
                    autoComplete="volleys"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>

              <Typography className ="sub-form-main" variant="h5" gutterBottom>
              Dribbling
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={agility}
                    onChange={agilityChangeHandler}
                    onBlur={agilityBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="agility"
                    label="Agility"
                    name="agility"
                    autoComplete="agility"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={balance}
                    onChange={balanceChangeHandler}
                    onBlur={balanceBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="balance"
                    label="Balance"
                    name="balance"
                    autoComplete="balance"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={reactions}
                    onChange={reactionsChangeHandler}
                    onBlur={reactionsBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="reactions"
                    label="Reactions"
                    name="reactions"
                    autoComplete="reactions"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={composure}
                    onChange={composureChangeHandler}
                    onBlur={composureBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="composure"
                    label="Composure"
                    name="composure"
                    autoComplete="composure"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={ballControl}
                    onChange={ballControlChangeHandler}
                    onBlur={ballControlBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="ballControl"
                    label="Ball Control"
                    name="ballControl"
                    autoComplete="ballControl"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={dribbling}
                    onChange={dribblingChangeHandler}
                    onBlur={dribblingBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="dribbling"
                    label="Dribbling"
                    name="dribbling"
                    autoComplete="dribbling"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>

            <Typography className ="sub-form-main" variant="h5" gutterBottom>
              Defending
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={interceptions}
                    onChange={interceptionsChangeHandler}
                    onBlur={interceptionsBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="interceptions"
                    label="Interceptions"
                    name="interceptions"
                    autoComplete="interceptions"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={headingAcc}
                    onChange={headingAccChangeHandler}
                    onBlur={headingAccBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="headingAcc"
                    label="Heading Acc."
                    name="headingAcc"
                    autoComplete="headingAcc"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={defAware}
                    onChange={defAwareChangeHandler}
                    onBlur={defAwareBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="defAware"
                    label="Def. Aware"
                    name="defAware"
                    autoComplete="defAware"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={standTackle}
                    onChange={standTackleChangeHandler}
                    onBlur={standTackleBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="standTackle"
                    label="Stand Tackle"
                    name="standTackle"
                    autoComplete="standTackle"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={slideTackle}
                    onChange={slideTackleChangeHandler}
                    onBlur={slideTackleBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="slideTackle"
                    label="Slide Tackle"
                    name="slideTackle"
                    autoComplete="slideTackle"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>
              <Typography className ="sub-form-main" variant="h5" gutterBottom>
              Physical
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={jumping}
                    onChange={jumpingChangeHandler}
                    onBlur={jumpingBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="jumping"
                    label="Jumping"
                    name="jumping"
                    autoComplete="jumping"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={stamina}
                    onChange={staminaChangeHandler}
                    onBlur={staminaBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="stamina"
                    label="Stamina"
                    name="stamina"
                    autoComplete="stamina"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={strength}
                    onChange={strengthChangeHandler}
                    onBlur={strengthBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="strength"
                    label="Strength"
                    name="strength"
                    autoComplete="strength"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                  <TextField
                    value={aggression}
                    onChange={aggressionChangeHandler}
                    onBlur={aggressionBlurHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="aggression"
                    label="Aggression"
                    name="aggression"
                    autoComplete="aggression"
                    InputLabelProps={{
                      style: { color: '#fff' },
                    }}
                    InputProps={{
                      style: { color: '#fff' },
                    }}
                  />
                </Grid>
              </Grid>

                
                
            <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, width: 100 }}
                  >
                    Submit
                  </Button>
                </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default PlayerStatsForm;
