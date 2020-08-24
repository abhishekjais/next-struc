import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface IValues {
    name: string;
    email: string;
    address: string;
    coupon: string;
}
export default function CustomModal(props: any) {
    const [open, setOpen] = React.useState(false);
    const [email, setemail] = React.useState('');
    const [user, setUser] = React.useState({} as IValues);
    const handleClose = () => {
        setOpen(false);
        props.handleClose(false);
    };

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    const handleSubmit = () => {
        // if (email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/)) {
        console.log(user, '888888888888888888888');

        setOpen(false);
        props.handleSubmit(user);
        // }
    }
    const handleChange = (value: string, label: string) => {
        const userData: any = { ...user };
        userData[label] = value;
        console.log(userData, '00000000000000000000');

        setUser(userData);
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={(e) => handleChange(e.target.value, 'name')}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={(e) => handleChange(e.target.value, 'email')}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        onChange={(e) => handleChange(e.target.value, 'address')}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="coupon"
                        label="Counpon"
                        type="text"
                        fullWidth
                        onChange={(e) => handleChange(e.target.value, 'coupon')}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}