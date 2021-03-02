//this was only ever intended to  be used for testing purposes
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('./models/user');
const Testimonial = require('./models/testimonial');
const Skill = require('./models/skill');
const SubSkill = require('./models/subskill');
const Job = require('./models/job');
const Promo = require('./models/promo');
const Review = require('./models/review');
const Subscriber = require('./models/subscriber');
const Guarantee = require('./models/guarantee');
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const { transcode } = require('buffer');
const howItWork = require('./models/howItWork');
const db = 'mongodb+srv://userstephen:9ineTo5ive!@cluster0.qt2k1.mongodb.net/eventsdb?retryWrites=true&w=majority';

dotenv.config();

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (err) {
		console.error('Error!' + err);
	} else {
		console.log('Connected to mongodb');
	}
});

function verifyToken(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(401).send('Unauthorized request');
	}
	let token = req.headers.authorization.split(' ')[1];
	if (token === 'null') {
		return res.status(401).send('Unauthorized request');
	}
	let payload = jwt.verify(token, 'secretKey');
	if (!payload) {
		return res.status(401).send('Unauthorized request');
	}
	req.userId = payload.subject;
	next();
}

router.get('/all-jobs', async (req, res) => {
	try {
		const jobs = await Job.find();
		res.json(jobs);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-subs', async (req, res) => {
	try {
		const subs = await Subscriber.find();
		res.json(subs);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/reviews', async (req, res) => {
	try {
		const reviews = await Review.find();
		res.json(reviews);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/how-it-works', async (req, res) => {
	try {
		const reviews = await howItWork.find();
		res.json(reviews);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/promos', async (req, res) => {
	try {
		const promos = await Promo.find();
		res.json(promos);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-skills', async (req, res) => {
	try {
		const skills = await Skill.find();
		res.json(skills);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-guarantees', async (req, res) => {
	try {
		const skills = await Guarantee.find();
		res.json(skills);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-users', async (req, res) => {
	try {
		const skills = await User.find();
		res.json(skills);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-promos', async (req, res) => {
	try {
		const promos = await Promo.find();
		res.json(promos);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-providers', async (req, res) => {
	try {
		const providers = await User.find();
		res.json(providers);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-seekers', async (req, res) => {
	try {
		const seekers = await User.find();
		res.json(seekers);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-admins', async (req, res) => {
	try {
		const admins = await User.find();
		res.json(admins);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-testimonials', async (req, res) => {
	try {
		const testimonials = await Testimonial.find();
		res.json(testimonials);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/all-subskills', async (req, res) => {
	try {
		const testimonials = await SubSkill.find();
		res.json(testimonials);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/new-providers', async (req, res) => {
	try {
		const providers = await User.find();
		res.json(providers);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/new-seekers', async (req, res) => {
	try {
		const seekers = await User.find();
		res.json(seekers);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/new-admins', async (req, res) => {
	try {
		const admins = await User.find();
		res.json(admins);
	} catch (err) {
		res.json({ message: err });
	}
});

router.post('/register-user', (req, res) => {
	let userData = req.body;
	let user = new User(userData);
	user.save((error, registeredUser) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: registeredUser._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/register-skill', (req, res) => {
	let skillData = req.body;
	let skill = new Skill(skillData);
	skill.save((error, registeredSkill) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: registeredSkill._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/register-provider-review', (req, res) => {
	let reviewData = req.body;
	let review = new Review(reviewData);
	review.save((error, registeredReview) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: registeredReview._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/register-seeker-review', (req, res) => {
	let reviewData = req.body;
	let review = new Review(reviewData);
	review.save((error, registeredReview) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: registeredReview._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/register-sub-skill', (req, res) => {
	let subSkillData = req.body;
	let subSkill = new SubSkill(subSkillData);
	subSkill.save((error, registeredSubSkill) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: registeredSubSkill._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/register-promo', (req, res) => {
	let promoData = req.body;
	let promo = new Promo(promoData);
	promo.save((error, registeredPromo) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: registeredPromo._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/post-job', (req, res) => {
	let jobData = req.body;
	let job = new Job(jobData);
	job.save((error, postJob) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: postJob._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/post-hiw', (req, res) => {
	let jobData = req.body;
	let job = new howItWork(jobData);
	job.save((error, postJob) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: postJob._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/post-guarantee', (req, res) => {
	let jobData = req.body;
	let job = new Guarantee(jobData);
	job.save((error, postJob) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: postJob._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/post-sub', (req, res) => {
	let subData = req.body;
	let sub = new Subscriber(subData);
	sub.save((error, postSub) => {
		if (error) {
			console.log(error);
		} else {
			let payload = { subject: postSub._id };
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({ token });
		}
	});
});

router.post('/login', (req, res) => {
	let userData = req.body;

	User.findOne({ email: userData.email }, (error, user) => {
		if (error) {
			console.log(error);
		} else {
			if (!user) {
				res.status(401).send('Invalid Email');
			} else if (user.password !== userData.password) {
				res.status(401).send('Invalid password');
			} else {
				let payload = { subject: user._id };
				let token = jwt.sign(payload, 'secretKey');
				res.status(200).send({ token });
			}
		}
	});
});

router.get('/jobs/:id', async (req, res) => {
	try {
		const get = await Job.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/skills/:id', async (req, res) => {
	try {
		const get = await Skill.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/skills/:id', async (req, res) => {
	try {
		const get = await Skill.findByIdAndRemove(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/sub-skills/:id', async (req, res) => {
	try {
		const get = await SubSkill.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/sub-skills/:id', async (req, res) => {
	try {
		const get = await SubSkill.findByIdAndRemove(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/reviews/:id', async (req, res) => {
	try {
		const get = await Review.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/reviews/:id', async (req, res) => {
	try {
		const get = await Review.findByIdAndRemove(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.get('/promos/:id', async (req, res) => {
	try {
		const get = await Promo.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/promos/:id', async (req, res) => {
	try {
		const get = await Promo.findByIdAndRemove(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});
router.get('/subs/:id', async (req, res) => {
	try {
		const get = await Subscriber.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/subs/:id', async (req, res) => {
	try {
		const get = await Subscriber.findByIdAndRemove(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});
router.get('/hiw/:id', async (req, res) => {
	try {
		const get = await howItWork.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/hiw/:id', async (req, res) => {
	try {
		const get = await howItWork.findByIdAndRemove(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});
router.get('/guarantee/:id', async (req, res) => {
	try {
		const get = await Guarantee.findById(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

router.delete('/guarantee/:id', async (req, res) => {
	try {
		const get = await Guarantee.findByIdAndRemove(req.params.id);
		res.json(get);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
