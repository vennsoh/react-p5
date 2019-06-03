import Particle from "./particle";

export default function sketch(p) {
	let bug1;

	p.setup = () => {
		p.createCanvas(710, 400);
		bug1 = new Particle();
	};

	p.draw = () => {
		p.background(50, 89, 100);
		bug1.move();
		bug1.display();
	};
}