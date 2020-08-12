import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const CreateTrack = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile)
  }

  return (
    <>
    {/* Create Track Button */}
    <Button onClick={() => setOpen(true)} variant="fab" className={classes.fab} color="secondary">
      {open ? <ClearIcon /> : <AddIcon />}
    </Button>

    {/* Create Track Dialog */}
    <Dialog open={open} className={classes.dialog}>
      <form>
        <DialogTitle>Create Track</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a Title, Description & Audio File
          </DialogContentText>


          <FormControl fullWidth>
            <TextField 
              lable="Title"
              placeholder="Add Title"
              onChange={event => setTitle(event.target.value)}
              className={classes.textField}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField 
              multiline
              rows="4"
              lable="Description"
              placeholder="Add Description"
              onChange={event => setDescription(event.target.value)}
              className={classes.textField}
            />
          </FormControl>

          <FormControl>
            <input 
              id="audio"
              required
              type="file"
              accept="audio/mp3"
              className={classes.input}
              onChange={handleAudioChange}
            />
            <label htmlFor="audio">
              <Button 
              variant="outlined" 
              color={file ? "secondary" :  "inherit"}
              component="span" 
              className={classes.button}
              >
                Audio File
                <LibraryMusicIcon className={classes.icon} />
              </Button>
              {file && file.name}
            </label>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} 
          className={classes.cancel}> Cancel </Button>

          <Button 
          disabled={
            !title.trim() || !description.trim() || !file
          } 
          type="submit" className={classes.save}>
            Add track
          </Button>

        </DialogActions>
      </form>
    </Dialog>
    </>
  );
};





const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
