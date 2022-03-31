import React from 'react';

const register = () => {
	return (
		<div>
			<h1>Register</h1>
			<form>
				<div ClassName="row mb-3">
					<label for="colFormLabel" ClassName="col-sm-2 col-form-label">
						Email
					</label>
					<div ClassName="col-sm-10">
						<input
							type="email"
							ClassName="form-control"
							id="colFormLabel"
							placeholder="col-form-label"
						/>
					</div>
				</div>
                <div ClassName="row mb-3">
					<label for="colFormLabel" ClassName="col-sm-2 col-form-label">
						Email
					</label>
					<div ClassName="col-sm-10">
						<input
							type="email"
							ClassName="form-control"
							id="colFormLabel"
							placeholder="col-form-label"
						/>
					</div>
				</div>
                <button type="submit" class="btn btn-primary">Sign in</button>
			</form>
		</div>
	);
};

export default register;
