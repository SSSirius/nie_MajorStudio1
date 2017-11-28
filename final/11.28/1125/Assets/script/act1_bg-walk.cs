using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour {
     private Animator animator;
	private float speed;
	public float movetime;
	public float maxSpeed;
	public float count;
	public Vector2 targetp;
	public Vector2 moove;
	public Vector2 start;
	public bool isfinded = false;
	public bool isleft = false;
	public bool click = false;
	private Rigidbody2D rb2D; 

	public Vector3 screenPosition, mousePositionOnScreen, mousePositionInWorld;
	void Start () {
		movetime = 0;
//		GetComponAnimatorState.speed = 0protected override void Start ()
		start = this.transform.position;
		moove = new Vector2 (0.05f, 0);
		rb2D = GetComponent<Rigidbody2D> ();
			//Get a component reference to the Player's animator component
		animator = GetComponent<Animator>();	
	}
	void Update ()
	{
		if (Input.GetMouseButtonDown (0)) {
//			GetComponAnimatorState.speed = 1.0;

//			rb2D.position += moove;
			screenPosition = Camera.main.WorldToScreenPoint (transform.position);  
			mousePositionOnScreen = Input.mousePosition;   
			mousePositionOnScreen.z = 10;  
			mousePositionInWorld = Camera.main.ScreenToWorldPoint (mousePositionOnScreen);  
			print (mousePositionInWorld);
			movetime = System.Math.Abs (mousePositionInWorld.x -rb2D.position.x) *20;
			count = movetime;
			if (mousePositionInWorld.x - rb2D.position.x < 0) {
			
				isleft = true;
			
			} else {
				isleft = false;
			}
		}

		if (isfinded) {
		}else{
		if (movetime != 0) {


				if (isleft) {
					rb2D.position -= moove;
					animator.SetTrigger ("walk-left");

				} else {

					rb2D.position += moove;
				

					animator.SetTrigger ("walk-right");
				}

			
				//			print("Input.mousePosition: " + Input.mousePosition );                      
				//			          print("Input.mousePosition world to viewport: " + Camera.main.WorldToViewportPoint(Input.mousePosition ));   
				//			          print("Input.mousePosition world to screen: " + Camera.main.WorldToScreenPoint(Input.mousePosition));  
				//			          print("Input.mousePosition Viewport To Screen: " + Camera.main.ViewportToScreenPoint(Input.mousePosition ));   
				//			          print("Input.mousePosition Viewport To World: " + Camera.main.ViewportToWorldPoint(Input.mousePosition));  
				//			          print("Input.mousePosition Screen To Viewport " + Camera.main.ScreenToViewportPoint(Input.mousePosition ));   
				//			          print("Input.mousePosition Screen To World: " + Camera.main.ScreenToWorldPoint(Input.mousePosition));  
				//					targetp = new Vector2(rb2D.position.x+0.5,rb2D.position.y);

				//			Vector2.MoveTowards(rb2D.position,targetp ,10 * Time.deltaTime);
				//			


			movetime --;
				print (rb2D.position);
				print (mousePositionInWorld.x);
				print (movetime);

			if (System.Math.Abs (movetime) < 1) {
				movetime = 0;
					if (isleft) {
//						rb2D.position -= moove;
						animator.SetTrigger ("walk-left");

					} else {

//						rb2D.position += moove;


						animator.SetTrigger ("walk-right");
					}
				
			}
			if (rb2D.position.x >9) {
				movetime = 0;



//				animator.SetTrigger ("walk-right");
				isfinded = true;
			}

			}
		}
	}
}
