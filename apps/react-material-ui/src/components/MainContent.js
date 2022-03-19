import styles from './MainContent.module.css';
import Button from '@material-ui/core/Button';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import TextField  from '@material-ui/core/TextField';

const MainContent = () => {
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const handleSwitchChange = (event) => {
    setTimeout(() => {
      alert('Switch value is ' + event.target.checked);
    }, 100);
  }
  return (
    <div className={styles['main-content']}>
      <h3>Buttons</h3>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary" style={{ marginLeft: 5 }}>
        Primary
      </Button>
      <h3>Date Pickers</h3>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
        <TimePicker value={selectedDate} onChange={handleDateChange} />
        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
      <h3>Switch</h3>
      <Switch
        onChange={handleSwitchChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <h3>Text Field</h3>
      <TextField id="outlined-basic" label="Name" placeholder="My Name"/>
      <TextField id="outlined-basic" label="E-mail" placeholder="E-mail" style={{marginLeft: 20}}/>
    </div>
  );
};

export default MainContent;
