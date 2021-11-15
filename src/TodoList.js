function TodoList() {
	return (
		<>
			<section class="todoapp">
				<header class="header">
					<h1>todos</h1>
					<form>
						<input class="new-todo" placeholder="What needs to be done?" autofocus />
					</form>
				</header>
				<section class="main">
					<input class="toggle-all" type="checkbox" />
					<label for="toggle-all">
						Mark all as complete
					</label>

					<ul class="todo-list">
						<li class="completed">
							<div class="view">
								<input class="toggle" type="checkbox" />
								<label>Learn JavaScript</label>
								<button class="destroy"></button>
							</div>
						</li>
						<li>
							<div class="view">
								<input class="toggle" type="checkbox" />
								<label>Learn React</label>
								<button class="destroy"></button>
							</div>
						</li>
						<li>
							<div class="view">
								<input class="toggle" type="checkbox" />
								<label>Have a life!</label>
								<button class="destroy"></button>
							</div>
						</li>
					</ul>
				</section>

				<footer class="footer">

					<span class="todo-count">
						<strong>2</strong>
						items left
					</span>

					<ul class="filters">
						<li>
							<a class="selected">All</a>
						</li>
						<li>
							<a>Active</a>
						</li>
						<li>
							<a>Completed</a>
						</li>
					</ul>

					<button class="clear-completed">
						Clear completed
					</button>
				</footer>
			</section>

			<footer class="info">
				<p>Created by <a href="https://www.linkedin.com/in/gizemhancerlioglu/">Gizem Hançerlioğlu</a></p>
			</footer>
		</>
	);
}

export default TodoList;
