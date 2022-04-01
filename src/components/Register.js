import React from 'react';

const register = () => {
	return (
		<div className='p-5 card-white col-5 m-5'>
			<h1>Register</h1>
			<div >
				<form>
					<div className="row mb-3">
						<label for="nameReg" className="col-sm-2 col-form-label">
							Name
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control"
								id="nameReg"
								placeholder="Ej. Maria"
							/>
						</div>
					</div>
                    <div className="row mb-3">
						<label for="aliasReg" className="col-sm-2 col-form-label">
							Alias
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control"
								id="aliasReg"
								placeholder="Ej. UserName"
							/>
						</div>
					</div>
					<div className="row mb-3">
						<label for="mailReg" className="col-sm-2 col-form-label">
							Email
						</label>
						<div className="col-sm-10">
							<input
								type="email"
								className="form-control"
								id="mailReg"
								placeholder="Ej. your@mail.com"
							/>
						</div>
					</div>
                    <div className="row mb-3">
						<label for="passReg" className="col-sm-2 col-form-label">
							Password
						</label>
						<div className="col-sm-10">
							<input
								type="email"
								className="form-control"
								id="passReg"
								placeholder="Type your password"
                                aria-describedby='passHelp'
							/>
						</div>
                        <div id="passHelp" class="form-text">*Password should be at least 8 characters</div>
					</div>
                    <div className="row mb-3">
						<label for="cpassReg" className="col-sm-2 col-form-label">
							Confirm password
						</label>
						<div className="col-sm-10">
							<input
								type="email"
								className="form-control"
								id="cpassReg"
								placeholder="Type your password"
							/>
						</div>
					</div>
                    <div className="row mb-3">
						<label for="birthReg" className="col-sm-2 col-form-label">
							Date of birth
						</label>
						<div className="col-sm-10">
							<input
								type="date"
								className="form-control"
								id="birthReg"
								placeholder=""
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">
						Sing in
					</button>
				</form>
			</div>
		</div>
	);
};

export default register;
