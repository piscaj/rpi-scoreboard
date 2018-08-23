<div>
        <div>
          <Well>
          <div className="number" >Home</div>
            <button className="button-3d" bsStyle="primary" onClick={this.subtractHome}>-</button>
            <span className="number">{this.state.homeScore}</span>
            <button className="button-3d" bsStyle="primary" onClick={this.addHome}>+</button>
            <div className="number" >Away</div>
            <button className="button-3d" bsStyle="primary" onClick={this.subtractAway}>-</button>
            <span className="number">{this.state.awayScore}</span>
            <button className="button-3d" bsStyle="primary" onClick={this.addAway}>+</button>
          </Well>
        </div>
      </div>