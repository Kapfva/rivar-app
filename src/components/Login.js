import React from 'react'

const Login = () => {
  return (
    <div className='p-5 card-white col-5 m-5'>
			<h1>Login</h1>
			<div className='p-5'>
				<form>
					<div className="row mb-3 ">
						<label for="EmailLg" className="col-sm-2 col-form-label">
							Email
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control"
								id="EmailLg"
								placeholder="Your e-mail"
							/>
						</div>
					</div>
					<div className="row mb-3">
						<label for="colFormLabel" className="col-sm-2 col-form-label">
							Password
						</label>
						<div className="col-sm-10">
							<input
								type="pass"
								className="form-control"
								id="colFormLabel"
								placeholder="Type your pass"
							/>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">
						Log in
					</button>
				</form>
			</div>
		</div>
  )
}

export default Login