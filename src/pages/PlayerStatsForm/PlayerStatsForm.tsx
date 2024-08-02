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
  dribbling: string;
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
}

const PlayerStatsForm: FC = () => {
  const [player, setPlayer] = useState<Player>({
    position: '',
    pace: '',
    shooting: '',
    passing: '',
    dribbling: '',
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
    curve
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
      crossingHasError
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
      curve.trim()     

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
