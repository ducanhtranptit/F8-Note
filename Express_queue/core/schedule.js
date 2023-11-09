const cron = require("node-cron");
const queue = require("./ExecuteQueue");
const model = require("../models/index");
const QueueJob = model.QueueJob;

const task = cron.schedule("*/10 * * * * *", async () => {
	const count = await QueueJob.count();
	if (count) {
		queue.work();
	} else {
		task.stop();
	}
});
