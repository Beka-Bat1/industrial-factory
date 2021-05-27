import React from 'react'

function ErrorPage() {
    return (
        <>
            <div class="page-head area-padding">
			<div class="container">
				<div class="row">
				    <div class="col-md-12 col-sm-12 col-xs-12">
				        <div class="row">
		                    <div class="error-page">
								{/* <!-- map area --> */}
								<div class="col-md-12 col-sm-12 col-xs-12">
								    <div class="error-main-text text-center">
								        <h2 class="error-easy-text">Page Not Found</h2>
								    	<h1 class="high-text">4<span class="color">0</span>4</h1>
								    	<h3 class="error-bot">Oops, the page you are looking for does not exit.</h3>
								    	<a  class="error-btn" href="#">Back Homepage</a>
								    </div>
								</div>
					        </div>
					    </div>
					</div>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
        </>
    )
}

export default ErrorPage
