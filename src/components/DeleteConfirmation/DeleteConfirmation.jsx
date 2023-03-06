import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export default function DeleteConfirmation({ openDialog, handleClose, data, handleDelete }) {
	// const [openDialog, setOpenDialog] = useState(false);

	return (
		<div>
			{/* <Button variant="outlined" onClick={handleClickOpen}>
				Open alert dialog
			</Button> */}
			<Dialog
				open={openDialog}
				product={data}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">
					{`Are you sure you want to delete`}
					<span className="font-extrabold"> {data.productsName} ?</span>
				</DialogTitle>

				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button
						startIcon={<DeleteIcon />}
						color="error"
						onClick={() => handleDelete(data)}
						autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
