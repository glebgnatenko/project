function Draw_Straight_Standart_Form_Linear_Function(k, kz, b, bz, stroke_style) {
    ctx.beginPath();
	ctx.lineWidth = delenie / 13;
    ctx.strokeStyle = stroke_style;
    if (k != 0) {
        ctx.moveTo((-1 * center[1] - b * bz * delenie) / (k * kz) + center[0], canvasPlotHeight);
        ctx.lineTo(center[0] + (center[1] - b * bz * delenie) / (k * kz), 0);
    }
	else {
        if (b == 0) {
            ctx.moveTo(0, center[1] - bz * delenie);
            ctx.lineTo(canvasPlotWidth, center[1] - bz * delenie);
        }
		else {
            ctx.moveTo(0, center[1] - b * bz * delenie);
            ctx.lineTo(canvasPlotWidth, center[1] - b * bz * delenie);
        }
    }
    ctx.stroke();
}

function Draw_Straight_General_View(A, Az, B, Bz, C, Cz, strokestyle) {
	ctx.beginPath();
	ctx.lineWidth = delenie / 13;
	ctx.strokeStyle = strokestyle;
	if (B != 0) {
		if (A != 0) {
			ctx.moveTo(((-1 * Bz * B * center[1] + Cz * C * delenie) / (-1 * Az * A)) + center[0], canvasPlotHeight);
			ctx.lineTo(center[0] + ((Bz * B * center[1] + Cz * C * delenie) / (-1 * A * Az)), 0);
		}
		else if (A == 0) {
			if (C == 0) {
				ctx.moveTo(0, center[1] - (-1 * Cz * delenie / (Bz * B)));
				ctx.lineTo(canvasPlotWidth, center[1] - (-1 * Cz * delenie / (Bz * B)));
			}
			else {
				ctx.moveTo(0, center[1] - (-1 * Cz * C * delenie / (Bz * B)));
				ctx.lineTo(canvasPlotWidth, center[1] - (-1 * Cz * C * delenie / (Bz * B)));
			}
		}
	}
	else if (B == 0){
		if (C == 0) {
			ctx.moveTo(center[0] + delenie, 0);
			ctx.lineTo(center[0] + delenie, canvasPlotHeight);
		}
		else {
			ctx.moveTo(center[0] + (-1 * C * Cz * delenie / (Az * A)), 0);
			ctx.lineTo(center[0] + (-1 * C * Cz * delenie / (Az * A)), canvasPlotHeight);
		}
	}
	ctx.stroke();
}

function Draw_Straight_Point_and_vector(a_v, a_vz, b_v, b_vz, x_v, x_vz, y_v, y_vz, strokestyle) {
	ctx.beginPath();
	ctx.lineWidth = delenie / 13;
	ctx.strokeStyle = strokestyle;
	if (a_v != 0 && b_v != 0) {
		ctx.moveTo((-1 * center[1] + (y_v * y_vz * delenie)) / (b_v * b_vz) * (a_v * a_vz) - (x_v * x_vz * delenie) + center[0], canvasPlotHeight);
		ctx.lineTo((center[1] + (y_v * y_vz * delenie)) / (b_v * b_vz) * (a_v * a_vz) - (x_v * x_vz * delenie) + center[0], 0);
	}
	ctx.stroke();
}

function Draw_Straight_In_segments(a_o, a_oz, b_o, b_oz, strokestyle) {
	ctx.beginPath();
	ctx.lineWidth = delenie / 13;
	ctx.strokeStyle = strokestyle;
	if (b_o != 0 && a_o != 0) {
		ctx.moveTo(center[0] + ((a_o * a_oz * delenie) - (-1 * center[1] / (b_o * b_oz) * (a_o * a_oz))), canvasPlotHeight);
		ctx.lineTo(center[0] + ((a_o * a_oz * delenie) - (center[1] / (b_o * b_oz) * (a_o * a_oz))), 0);
	}
	ctx.stroke();
}

function Draw_Straight_At_Two_Points(ctandart_znamenatel_1, ctandart_znamenatel_1z, ctandart_znamenatel_2, ctandart_znamenatel_2z, x_1, x_1z, y_1, y_1z, strokestyle) {
	ctx.beginPath();
	ctx.lineWidth = delenie / 13;
	ctx.strokeStyle = strokestyle;
	if (ctandart_znamenatel_1 != 0 && ctandart_znamenatel_2 != 0) {
		ctx.moveTo(center[0] + (((-1 * center[1] + (y_1 * y_1z * delenie))) / (ctandart_znamenatel_2 * ctandart_znamenatel_2z)) * ctandart_znamenatel_1 * ctandart_znamenatel_1z  - (x_1 * x_1z * delenie), canvasPlotHeight);
		ctx.lineTo(((center[1] + (y_1 * y_1z * delenie)) / (ctandart_znamenatel_2 * ctandart_znamenatel_2z)) * (ctandart_znamenatel_1 * ctandart_znamenatel_1z) - (x_1 * x_1z * delenie) + center[0], 0);
	}
	ctx.stroke();
}

function Draw_Vector(a_v, a_vz, b_v, b_vz, a_1, a_0, rad_2, b_1, b_0, rad_4, strokestyle, a_, b_, alphax, alphax_, betay, betay_) {
	
	ctx.strokeStyle = strokestyle;
	if (a_v * b_v != 0) {
		ctx.beginPath();
		ctx.lineWidth = delenie / 13;
		ctx.moveTo(center[0], center[1]);
		ctx.lineTo(a_v * a_vz * delenie + center[0], center[1] - b_v * b_vz * delenie);
		ctx.moveTo(a_ * delenie + center[0], center[1] - b_ * delenie);
		// ctx.moveTo(center[0] + a_vz * delenie * a_1, center[1] - delenie * b_vz * b_1);
		ctx.lineTo(a_v * a_vz * delenie + center[0], center[1] - b_v * b_vz * delenie);
		ctx.stroke();
		a_ = a_vzp * a_vp - a_vzp * alphax_ - b_vzp * alphax;
		b_ = b_vzp * b_vp -	a_vzp * betay_ - b_vzp * betay;
		ctx.beginPath();
		ctx.moveTo(a_ * delenie + center[0], center[1] - b_ * delenie);
		// ctx.moveTo(center[0] + a_vz * delenie * a_1, center[1] - delenie * b_vz * b_1);
		ctx.lineTo(a_v * a_vz * delenie + center[0], center[1] - b_v * b_vz * delenie);
		ctx.stroke();
	}
	else if (a_v == 0) {
		if (b_v != 0) {
			ctx.beginPath();
			ctx.moveTo(center[0], center[1]);
			ctx.lineTo(center[0], center[1] -  b_v * b_vz * delenie);
			ctx.moveTo(center[0] + delenie * (long_draw / 2), center[1] - delenie * (b_v - long_draw) * b_vz);
			ctx.lineTo(center[0], center[1] -  b_v * b_vz * delenie);
			ctx.moveTo(center[0] - delenie * (long_draw / 2), center[1] - delenie * (b_v - long_draw) * b_vz);
			ctx.lineTo(center[0], center[1] - b_v * b_vz * delenie);
			ctx.stroke();
		}
	}
	else if (b_v == 0) {
		if (a_v != 0) {
			ctx.beginPath();
			ctx.moveTo(center[0], center[1]);
			ctx.lineTo(center[0] + a_v * a_vz * delenie, center[1]);
			ctx.moveTo(center[0] + a_vz * delenie * (a_v - long_draw), center[1] - b_vz * delenie * (long_draw / 2));
			ctx.lineTo(center[0] + a_v * a_vz * delenie, center[1]);
			ctx.moveTo(center[0] + a_vz * delenie * (a_v - long_draw), center[1] + b_vz * delenie * (long_draw / 2));
			ctx.lineTo(center[0] + a_v * a_vz * delenie, center[1]);
			ctx.stroke();
		}
	}
}

function Draw_Point(x, y, stroke_style) {
    ctx.beginPath();
    ctx.strokeStyle = stroke_style;
	ctx.lineWidth = delenie / 6;
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function Draw_Coordinate_System(center_x, center_y, canvas_width, canvas_height, delenie, stroke_style) {
	ctx.beginPath();
    ctx.lineWidth = delenie / 12;
    ctx.strokestyle = stroke_style;
    ctx.moveTo(0, center_y);
    ctx.lineTo(canvas_width, center_y);
    ctx.moveTo(center_x, 0);
    ctx.lineTo(center_x, canvas_height);
    ctx.moveTo(center_x - delenie * 0.7 / 2, delenie * 0.7);
    ctx.lineTo(center_x, 0);
    ctx.moveTo(center_x + delenie * 0.7 / 2, delenie * 0.7);
    ctx.lineTo(center_x, 0);
    ctx.moveTo(canvas_width - delenie * 0.7, center_y - delenie * 0.7 / 2);
    ctx.lineTo(canvas_width, center_y);
    ctx.moveTo(canvas_width - delenie * 0.7, center_y + delenie * 0.7 / 2);
    ctx.lineTo(canvas_width, center_y);
    for (let i = 1; i < canvas_height / delenie; i++) {
        if (i * delenie != center_y) {
            ctx.moveTo(center_x - delenie / 5, i * delenie);
            ctx.lineTo(center_x + delenie / 5, i * delenie);
        }
    }
    for (let i = 1; i < canvas_width / delenie; i++) {
        if (i * delenie != center_x) {
            ctx.moveTo(i * delenie, center_y - delenie / 5);
            ctx.lineTo(i * delenie, center_y + delenie / 5);
        }
    }
    ctx.stroke();
}