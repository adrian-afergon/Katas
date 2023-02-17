
import * as fs from "fs";
import * as path from "path";

type nSubscribeCallback = (event: SensorEvent) => void

interface Sensor {
    suscribe: (fn: nSubscribeCallback) => void
}

interface VideoRecorder {
    start: () => void
}


interface SensorEvent {
    signal: string
}

class Orchestrator {
    constructor(private readonly sensor: Sensor, private readonly videoRecorder: VideoRecorder) {}

    run() {
        this.sensor.suscribe((event: SensorEvent) => {
            if (event.signal === "startMovement"){
                this.videoRecorder.start()
            }
        })
    }
}

class FakeSensor implements Sensor{
    suscribe(fn: nSubscribeCallback): void {
        fn({signal: 'startMovement'})
    }

}

class FakeVideoRecorder implements VideoRecorder {
    start() {
        fs.writeFileSync(path.join(__dirname, 'records/rec.mov'), new Buffer([]))
    }

}
describe('Video Recorder', () => {

    it('start video recording when movement is detected', () => {
        const recordedFile = 'records/rec.mov';
        fs.exists(recordedFile, (exists) => {
            if(exists) {
                fs.unlinkSync(recordedFile)
            }
        })


        const orchestrator = new Orchestrator(
            new FakeSensor(),
            new FakeVideoRecorder()
        )

        orchestrator.run()

        const file = fs.readFileSync(path.join(__dirname, recordedFile), 'utf-8')
        expect(file).not.toBeNull()
    });


});